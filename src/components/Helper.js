import React, { Component } from 'react'
import { Label, Message, Modal } from 'semantic-ui-react'
import { DragSource } from 'react-dnd'
import { DRAG_TYPES } from './Path';

const boxSource = {
  beginDrag(props) {
    return {
      ...props,
    }
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult()

    if (dropResult && props.onDropped) {
      props.onDropped(props, dropResult)
    }
  },
}

@DragSource(DRAG_TYPES.PATH, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Helper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false
    }
  }

  handleClick() {
    if (this.props.selectParams) {
      this.setState({ modalOpen: true })
    }
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  render() {
    const { name, isDragging, connectDragSource } = this.props
    const opacity = isDragging ? 0.4 : 1
    const marginBottom = '10px'
    const color = 'olive'

    return connectDragSource(
      <div style={{ marginBottom }}>
        <Message color={color} style={{ opacity }} onClick={() => this.handleClick()}>
          <Label color={color} horizontal>HELPER</Label>
          <strong>
            {name}
          </strong>
        </Message>
        <Modal open={this.state.modalOpen} onClose={() => this.handleClose()}>
          <Modal.Header>Helper parameters</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              TODO
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default Helper