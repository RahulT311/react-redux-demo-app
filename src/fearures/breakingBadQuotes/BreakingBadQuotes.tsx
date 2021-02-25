import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as ApiEndPoints from '../../constants/apiEndPoints'
import { quotes } from './actions';
class BreakingBadQuotesList extends React.Component<any, any> {
  componentDidMount(){
    this.props.fetchQuotesData(ApiEndPoints.breakingBadQuotesURL);
  }
 
  render() {
    const { quotes } = this.props.quotes;
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
  quotes: state.breakingBadQuotes,
})
const mapDispatchToProps = (dispatch : any) => {
  return {
    fetchQuotesData: (url : string) => dispatch(quotes(url))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BreakingBadQuotesList)