import React, { Fragment } from "react"
import { connect } from "react-redux"
interface Props {
    
}
class BreakingBadQuotesList extends React.Component {
  constructor(props : Props) {
    super(props)
    this.state = {
      newQuote: "",
      currentVal: "",
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()

    const addedQuote = {
      title: this.state.newQuote,
    }

    this.props.addQuote(addedQuote)
    this.setState({ newQuote: "" })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  remove(i) {
    this.props.removeQuote(i);
  }


  update(i) {
    this.props.updateSong(this.state.currentVal, i)
    this.setState({ currentVal: "" })
  }


  render() {
    const { songs } = this.props.quotes
    return (
      <ul>
        {songs.map((quote, i) => {
          return (
            <Fragment key={quote.title}>
              {!quote.editing ? (
                <li>
                  {quote.title}
                  <span>
                    <button onClick={() => this.remove(i)}>Delete</button>
                    <button onClick={() => this.edit(i, quote.title)}>
                      Edit
                    </button>
                  </span>
                </li>
              ) : (
                <li>
                  <form>
                    <input
                      type="text"
                      name="currentVal"
                      value={this.state.currentVal}
                      onChange={this.updatedVal}
                    />
                  </form>
                  <span>
                    <button onClick={() => this.update(i)}>Update</button>
                  </span>
                </li>
              )}
            </Fragment>
          )
        })}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="newQuote" onChange={this.onChange} />
          <input type="submit" value="Add Quote" />
        </form>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes,
})

export default connect(mapStateToProps, {
  addQuote,
  deleteQuote,
  updateQuote, 
})(BreakingBadQuotesList)