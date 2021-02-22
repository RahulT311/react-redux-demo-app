import React, { Fragment } from 'react';
import axios from 'axios';

class BreakingBadQuotesList extends React.Component<any, any> {
  constructor(props : any) {
    super(props);
    this.state  = {
      quotes : []
    }
  }
  componentDidMount(){
    axios.get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/10`)
    .then((res : any) => {
      const quotes = res.data;
      this.setState({ quotes : quotes });
    })
  }

  render() {
    const { quotes } = this.state;
console.log('quotes', quotes);
    return (
      <ul>
        { quotes.length !== 0 && quotes.map((quote : any) => {
          return (
            <Fragment key={quote?.quote}>
              {
                <li>
                  {quote?.quote}                  
                </li>            
              }
            </Fragment>
          )
        })}        
      </ul>
    )
  }
}

// const mapStateToProps = state => ({
//   quotes: state.quotes,
// })

// export default connect(mapStateToProps, {
// })(BreakingBadQuotesList)
export default BreakingBadQuotesList;