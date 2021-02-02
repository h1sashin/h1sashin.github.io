import React from 'react';
import styled from 'styled-components';
import dir from 'assets/img/places/dir.svg';
import defaultIcon from 'assets/img/apps/default.svg';
import txt from 'assets/img/places/txt.svg';
import pdf from 'assets/img/places/pdf.svg';
import png from 'assets/img/places/png.svg';

const Item = styled.button`
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 110%;
    img {
        height: 50%;
    }
`;

const iconChooser = (type, extension) => {
    switch(type) {
        case 'directory':
            return dir;
        case 'file':
            switch(extension) {
                case '.txt':
                    return txt;
                case '.pdf':
                    return pdf;
                case '.png': case '.jpg':
                    return png;
                default:
                    return defaultIcon;
            }
        default:
            return defaultIcon;
    }
}

const FileIcon = ({ fileName, fileType, fileExtension, fileOnClick, filePath }) => {
    return (
        <Item onClick={() => fileOnClick(filePath)}>
            {console.log(fileType, fileExtension)}
            <img src={iconChooser(fileType, fileExtension)} alt={fileName} />
            <span>{fileName}</span>
        </Item>
    );
}

export default FileIcon;