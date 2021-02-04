import React, { createContext, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { portfolioData, resumeData } from 'data';
import App from 'apps/App';
import SidebarStyled from 'components/desktop/atoms/SidebarStyled';
import Child from 'components/desktop/atoms/Child';
import ContentStyled from 'components/desktop/atoms/ContentStyled';
import icon from 'assets/img/apps/files.svg';
import { Button, Portfolio, TopBar, Link, Skill, Skills, CardContainer, Card } from './styles';

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