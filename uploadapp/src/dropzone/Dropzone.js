import React from 'react';

import './Dropzone.css';

class Dropzone extends React.Component {

    constructor(props){
        super(props);
        this.fileInputRef = React.createRef();
        this.state = { highlight : false};
    }

    openFileDialog =() =>{
        if(this.props.disabled){
            return;
        }

        this.fileInputRef.current.click();
    }

    onFilesAdded = (event)=>{
        if(this.props.disabled){
            return;
        }
        const files = event.target.files;
        if(this.props.onFilesAdded){
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    fileListToArray=(list)=>{
        console.log('fileListToArray ', list);
        const array = [];
        for (var i=0; i< list.length; i++){
            array.push(list.item(i));
        }
        return array;
         
    }

    onDragOver = (event) =>{
        event.preventDefault();

        if(this.props.disabled){
            return;
        }

        this.setState({ highlight: true });
    }

    onDragLeave =()=>{
        this.setState({highlight: false});
    }

    onDrop =(event) =>{
        event.preventDefault();

        if(this.props.disabled){
            return;
        }

        const files = event.dataTransfer.files;
        if(this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ highlight: false });
    }

    render () {
        return (
            <div className={`Dropzone ${this.state.highlight? 'Highlight' : ''}`}
                onClick={this.openFileDialog}
                style={{cursor: this.props.disabled? 'default':'pointer'}}
                onDragOver = {this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
            >
                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <img
                    alt="upload"
                    className="Icon"
                    src="cloud_upload-24px.svg"
                >
                </img>
                <span>Upload Files</span>
            </div>
        )
    }
}

export default Dropzone;