import React from "react"
import { Popup, Button, Container, Divider, Grid, Icon, Input, Menu } from 'semantic-ui-react'

export default class PopupAddScenario extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Popup wide  on='click'>
                <Grid divided columns='equal'>
                    <Grid.Column>
                        <Popup
                            trigger={<form> <label for="fname">nom Scenario:</label>
                                <input type="text" id="fname" name="fname" /><br /><br />
                                <label for="lname">description:</label>
                                <input type="text" id="lname" name="lname" />
                                <button>Save</button>
                            </form>}
                            content='The story ends. You wake up in your bed and believe whatever you want to believe.'
                            position='top center'
                            size='tiny'
                            inverted
                        />
                    </Grid.Column>
                </Grid>
            </Popup>
        )
    }
}