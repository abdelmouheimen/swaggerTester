import React, { Component } from 'react'

export class ExportScenario extends Component {
    constructor(props) {
        super(props)
    }

    export = () => {
        const fileData = JSON.stringify(this.props.scenaris);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url;
        link.click();
    }

     importScenaris = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          this.props.importScs(e.target.result);
        };
      };
     

    render() {
        return (

            <div >
                <button class="ui button" onClick={this.export}>export scenarios</button>
                <div class="or"></div>
                <input type="file"  name ="test" id="test" onChange={this.importScenaris}/>
            </div>

        )
    }
}