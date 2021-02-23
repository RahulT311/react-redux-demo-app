import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/BreakingBadQuotesActions';
class BreakingBadQuotesList extends React.Component<any, any> {
  componentDidMount(){
    this.props.fetchQuotesData('https://breaking-bad-quotes.herokuapp.com/v1/quotes/10');
  }
 
  render() {
    const { quotes } = this.props;
    return (
      <ul>
        {quotes &&  quotes.length !== 0 && quotes.map((quote : any) => {
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

const mapStateToProps = (state : any) => ({
  quotes: state.quotes,
})
const mapDispatchToProps = (dispatch : any) => {
  return {
    fetchQuotesData: (url : string) => dispatch(fetchQuotes(url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BreakingBadQuotesList)