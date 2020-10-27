const { response } = require("express");

class Vinyl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          vinyls: []
        }
      }
      handleChange = event => {
        this.setState({ inputValue: event.target.value })
      }
      handleSubmit = event => {
        event.preventDefault()
        axios
        
          .post('/vinyls', this.state)
          .then(response => this.setState(
            { type: '',
              title: '',
              release_title: '',
              credit: '',
              artist:'',
              anv: '',
              label: '',
              genre: '',
              style: '',
              country: '',
              year: '',
              format: '',
              catno: '',
              barcode: '',
              track: '',
              submitter: '',
              contributor: '',
              vinyls: response.data
            })
          )
      
          fetch(`https://api.discogs.com/database/search?q={this.state.input}&{?type,title,release_title,credit,artist,anv,label,genre,style,country,year,format,catno,barcode,track,submitter,contributor}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              vinyls: result.vinyls
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

        render = () => {
          const { error, isLoaded, vinyls } = this.state;
         if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>
        }
      }
    }

class Picks extends React.Component {
  constructor(props) {
    super(props);
    state = {
    vinyls: response.data
    }
  }
    render = () => { 
        return (
            <div>
              <h2>Staff Picks</h2>
            <ul>
              {vinyls.map(vinyls => (
                <li key={response}>
                  <img src="{vinyls.img}"/> {vinyls.type} {vinyls.title} {vinyls.release_title} {vinyls.credit} {vinyls.artist} {vinyls.any} {vinyls.label} {vinyls.genre} {vinyls.style} {vinyls.country} {vinyls.year} {vinyls.format} {vinyls.catno} {vinyls.barcode} {vinyls.track} {vinyls.submitter} {vinyls.contributor}
                </li>
              ),
              )
              }
              </ul>
              </div>
          )
            }
            }
              
    
        

      
    

class Header extends React.Component {
    render = () => {
        return(
         <div>
            <div className="header-1">
            </div> 
            </div>
        )
      }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    (this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

class App extends React.Component {
        state = {
            vinyls:{}
        }
    

    componentDidMount = () => {
        axios
        .get('/vinyls')
        .then((response) => {
          this.setState({
            vinyls: response.data
          })
        })
    }

    createVinyl = (event) => {
        event.preventDefault();
        axios.post(
            '/vinyls',
            {
                album:this.state.newVinylAlbum,
                artist:this.state.newVinylArtist,
            }
        ).then(
            (response) => {
                this.setState({
                    vinyls:response.data
                })
            }
        )
    }

    changeNewVinylAlbum = (event) => {
        this.setState({
            newVinylAlbum:event.target.value
        });
    }

    changeNewVinylArtist = (event) => {
        this.setState({
            newVinylArtist:event.target.value
        });
    }

    deleteVinyl = (event) => {
        axios.delete('/vinyls' + event.target.value).then(
            (response) => {
                this.setState({
                    vinyls:response.data
                })
            }
        )

    }

    updateVinyl = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/vinyls' + id,
            {
                album:this.state.updateVinylAlbum,
                artist:this.state.updateVinylArtist,
            }
        ).then(
            (response) => {
                this.setState({
                    vinyls:response.data,
                    album:'',
                    artist:'',
                })
            }
        )
    }

    changeUpdateVinylAlbum = (event) => {
        this.setState(
            {
                updateVinylAlbum:event.target.value
            }
        )
    }

    changeUpdateVinylArtist = (event) => {
        this.setState(
            {
                updateVinylArtist:event.target.value
            }
        )
    }
    render = () => {
      return(<div>
        <Header></Header>
        <SearchForm></SearchForm>
        <Picks></Picks>
        <Vinyl></Vinyl>        
        </div>
      )
    }
}
 
        

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
