import React, { createContext, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { portfolioData, resumeData } from 'data';
import styled, { css } from 'styled-components';
import App from 'apps/App';
import file from 'assets/img/places/description-black.svg';
import SidebarStyled from 'components/atoms/SidebarStyled';
import Child from 'components/atoms/Child';
import ContentStyled from 'components/atoms/ContentStyled';
import icon from 'assets/img/apps/files.svg';

const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    margin: 0;
    margin-left: -35px;
    color: ${props => props.theme.mode.text};
    ${props => props.portfolio && css`
        margin-left: -10px;
    `}
    ${props => props.resume && css`
        margin-left: -20px;
    `}
    li {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: -15px;
        &:before {
            margin-right: 5px;
            content: '';
            display: inline-block;
            height: 20px;
            width: 20px;
            background-image: url(${file});
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        font-weight: 700;
        font-family: 'Ubuntu', sans-serif;
    }
`;

const Portfolio = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
    }
`;

const TopBar = styled.div`
    width: 100%;
    height: 32px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: none;
    h6 {
        font-size: 1em;
        margin-right: 20px;
    }
    background: ${props => props.theme.mode.primary};
    color: ${props => props.theme.mode.text};
`;

const Link = styled.a`
    margin-right: 20px;
    ${props => props.linkExists === '' && css`
        text-decoration: line-through;
        color: ${props.theme.mode.text};
    `}
`;

const Skill = styled.div`
    position: relative;
    height: 128px;
    width: 128px;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    color: ${props => props.theme.mode.text};
    img {
        height: 75%;
    }
    h3 {
        font-size: 16px;
    }
`;

const Skills = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 72px);
    height: calc(100% - 72px);
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fit, 128px);
    grid-template-rows: repeat(auto-fill, 128px);
    padding: 36px;
`;

const CardContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 72px);
    height: calc(100% - 72px);
    padding: 36px;
    display: grid;
    grid-gap: 96px;
    grid-template-columns: repeat(auto-fit, 384px);
    grid-template-rows: repeat(auto-fill, 196px);
`;

const Card = styled.div`
    width: 384px;
    height: 196px;
    background: #878f99;
    padding: 16px;
    position: relative;
    box-shadow: 0 0 10px 0 black;
    div {
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h1 {
                margin: 0;
                padding: 0;
            }
            img {
                width: 72px;
            }
        }
        h2,h3 {
            margin: 0;
            padding: 0;
            font-weight: 500;
        }
        h3 {
            font-weight: 300;
            font-size: 1em;
        }
    }
    h4 {
        margin: 0;
        padding: 0;
        position: absolute;
        left: 16px;
        bottom: 16px;
    }
    a {
        text-decoration: underline;
        position: absolute;
        right: 16px;
        bottom: 16px;
    }
`;

const Context = createContext({
    currentIndex: 1,
    setIndex: () => {}
});

const reducedArray = [].concat(portfolioData, resumeData);

const Sidebar = () => {
    const { setIndex } = useContext(Context);
    
    return(
        <SidebarStyled>
            <h1>Portfolio</h1>
            <h3>Done</h3>
            <ul>
                {reducedArray.map((elem, e) => {
                    if(elem.status === 'done' && elem.assign === 'portfolio'){
                        return(
                            <Button key={elem.name} onClick={() => setIndex(e+1)} type='button' portfolio>
                                <li>
                                    {elem.name}
                                </li>
                            </Button>
                        );
                    }
                    return null;
                })}
            </ul>
            <h3>Undone</h3>
            <ul>
                {reducedArray.map((elem, e) => {
                    if(elem.status === 'undone' && elem.assign === 'portfolio'){
                        return(
                            <Button key={elem.name} onClick={() => setIndex(e+1)} type='button' portfolio>
                                <li>
                                    {elem.name}
                                </li>
                            </Button>
                        );
                    }
                    return null;
                })}
            </ul>
            <h1>Resume</h1>
            <ul>
                {reducedArray.map((elem, e) => {
                    if(elem.assign === 'resume'){
                        return(
                            <Button key={elem.name} onClick={() => setIndex(e+1)} type='button' resume>
                                <li>
                                    {elem.name}
                                </li>
                            </Button>
                        )
                    }
                    return null;
                })}
            </ul>
        </SidebarStyled>
    );
}

const Content = ({ children }) => {
    const { currentIndex } = useContext(Context);
    return(
        <ContentStyled>
            <Child>
                {children[currentIndex - 1]}
            </Child>
        </ContentStyled>
    );
}

const Wizard = ({ children }) => {
    const [ currentIndex, setIndex ] = useState(1);
    return(
      <Context.Provider 
        value={{
            currentIndex,
            setIndex,
        }}    
    >
        {children}
    </Context.Provider>  
    );
}

const Files = ({ files }) => {
    const { isOpen, isMinimized, isMaximized, x, y, width, height, appName } = files;

    return(
        <App isOpen={isOpen} isMinimized={isMinimized} isMaximized={isMaximized} x={x} y={y} width={width} height={height} appName={appName} icon={icon}>
            <Wizard>
                <Sidebar />
                <Content>
                    {reducedArray.map((elem) => {
                        let object = null;
                        if ( elem.assign === 'portfolio' ) {
                            object = (
                                <div key={elem.id}>
                                    <TopBar>
                                        <div >
                                            <Link href={elem.github} target='_blank' rel="noreferrer" linkExists={elem.github}>github</Link>
                                            <Link href={elem.linkedin} target='_blank' rel="noreferrer" linkExists={elem.live}>live</Link>
                                        </div>
                                    </TopBar> 
                                    <Portfolio>
                                        <img src={elem.photo} alt={elem.name} />
                                    </Portfolio>
                                </div>
                            );
                        } else if ( elem.assign === 'resume' ) {
                            if ( elem.name === 'education' ) {
                                object = (
                                    <CardContainer key={elem.name}>
                                        {elem.education.map((item) => {
                                            return(
                                                <Card key={item.id}>
                                                    <div>
                                                        <header>
                                                            <h1>{item.school}</h1>
                                                            <img src={item.logo} alt={item.school} />
                                                        </header>
                                                        <h3>{item.field}</h3>
                                                    </div>
                                                    <h4>{item.year}</h4>
                                                </Card>
                                            );
                                        })}
                                    </CardContainer>
                                );
                            } else if ( elem.name === 'experience' ) {
                                object = (
                                    <CardContainer key={elem.name}>
                                        {elem.experience.map((item) => {
                                            return(
                                                <Card key={item.id}>
                                                    <div>
                                                        <header>
                                                            <h1>{item.company}</h1>
                                                            <img src={item.logo} alt={item.company} />
                                                        </header>
                                                        <h2>{item.position}</h2>
                                                        <h3>type: {item.type}</h3>
                                                    </div>
                                                    <h4>{item.year}</h4>
                                                </Card>
                                            );
                                        })}
                                    </CardContainer>
                                );
                            } else if ( elem.name === 'certificates' ) {
                                object = (
                                    <CardContainer key={elem.id}>
                                        {elem.certificates.map((item) => {
                                            return (
                                                <Card key={item.id}>
                                                    <div>
                                                        <header>
                                                            <h1>{item.name}</h1>
                                                            <img src={item.logo} alt={item.organizer} />
                                                        </header>
                                                    </div>
                                                    <div>
                                                        <h4>{item.year}</h4>
                                                        <a href={item.doc}>view</a>
                                                    </div>
                                                </Card>
                                            );
                                        })}
                                    </CardContainer>
                                );
                            } else if ( elem.name === 'skills' ) {
                                const [ level, setLevel ] = useState('');
                                const [ skill, setSkill ] = useState('');
                                object = (
                                    <Skills key={elem.name}>
                                        <TopBar>
                                            {level === '' ? <h6>select skill to display level</h6> : <h6>{skill} level: {level}/5</h6>}
                                        </TopBar>
                                        {elem.skills.map((item) => {
                                            return(
                                                // eslint-disable-next-line no-return-assign
                                                <Skill onClick={() => {setLevel(item.level); setSkill(item.name)}} key={item.id} level={item.level} skill={elem.name}>
                                                    <img src={item.icon} alt={item.name} />
                                                    <h3>{item.name}.skill</h3>
                                                </Skill>
                                            );
                                        })}
                                    </Skills>
                                )
                            } else {
                                object = (
                                    <h1 key='unknown'>ERROR 404</h1>
                                );
                            }
                        }
                        return object;
                    })}
                </Content>
                </Wizard>
        </App>
    );
}

const mapStateToProps = (state) => {
    return {
        files: state.appsReducer.files
    }
}

export default connect(mapStateToProps)(Files);