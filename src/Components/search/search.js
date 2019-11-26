import React ,{Component} from 'react';
import '../../Search.css';
import axios from 'axios'
import map from '../assets/map.png'
class Search extends Component{

    constructor(props){
        super(props);
        this.state={
            query:'',
            results:{},
            loading:false,
            message:''
        }
        this.cancel='';
    }

    fetchSearchResults=(updatedPageNo='', query )=>{
        const pageNumber=updatedPageNo ? `&page=${updatedPageNo}`:'';
        const searchUrl=`https://pixabay.com/api/?key=14093259-21b3b737b3657833f5eb0d0bf&q=${query}${pageNumber}&image_type=photo`;

        if(this.cancel){
            this.cancel.cancel();
        }
        this.cancel=axios.CancelToken.source();

        axios.get(searchUrl,{
            cancelToken: this.cancel.token
        })
        .then(res =>{
            const resultNotFoundMsg=! res.data.hits.length ? 'There are no more search results.Please try new search':"";
            this.setState({
                results:res.data.hits,
                message:resultNotFoundMsg,
                loading:false
            })
            //console.warn(res);
        }).catch(error=>{
            if(axios.isCancel(error)|| error){
                this.setState({
                    loading:false,
                    message:'Failed to fetch data pliz check network'
                })
            }
        })
       
    };

    handleOnInputChange=(event)=>{
        const query=event.target.value;
        console.warn(query);
        this.setState( {query: query , loading:true, message:''},()=>{
            this.fetchSearchResults(1,query);
        });
    };

    renderSearchResults=()=>{
        const{results}=this.state;

        if(Object.keys(results).length && results.length){
            return(
                <div className="results-container">
                    {results.map(result=>{
                        return(
                            <a key={result.id} href={result.previewURL} className="result-item">
                                <h6 className="image-username">{result.username}</h6>
                                <div className="image-wrapper">
                                    <img src={result.previewURL} alt={`${result.username} image`}/>

                                </div>
                            </a>
                        )
                    })}
                </div>
            )
        }
    };
    render(){
        const{query}=this.state;
        return(
            <div>
            <div className="blue darken-4">
            <div className="container">
                <div> {/*heading*/} <h2 className="heading" >Find Property for Sale</h2>
             
              {/*map image */}
               
              {/*search input*/}
              <div><label htmlFor="" className="search-label" htmlFor="search-input"></label></div>
              <div className="map" style={{float:"right"}}><img className="mapimg" src={map}/></div>
              <input type="text" name="query" value={query} id="search-input" placeholder="Searching..." onChange={this.handleOnInputChange}/>
              <i className="fa fa-search search-icon"/>
              {/*result*/}
              </div>
              </div>
           
            </div>
           
            <div className="card text-center">
                        <div className="overflow" >
                        
                       
                
                {this.renderSearchResults()}
           </div>
            </div>
            </div>
        )
    }
}
export default Search;