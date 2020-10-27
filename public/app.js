// note: nirvana is hard-coded into fetch

class Vinyl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          vinyls: ''
        }
      }
    
      handleChange = event => {
        this.setState({ 
        input: event.target.value })
      }
      handleSubmit = event => {
        this.setState({
          input: event.target.value
        }) 
        console.log(event)    
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
      
      
          fetch(`https://api.discogs.com/database/search?artist=nirvana`)
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
          const { error } = this.state;
         if (error) {
          return <div>Error: {error.message}</div>
         }
          return <div className="container">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Search:
                  <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="button" type="submit" value="Submit" />
              </form>
              </div>
              
        }
      }
            
          
        
    


class Picks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vinyls: '',
    }
  }
  componentDidMount() {
    fetch('https://localhost:3000/vinyls')
      .then(response => response.json())
      .then(vinyls => this.setState({vinyls}))
  }
  
    render = () => { 
        return (
            <div>
              <h1>Staff Picks</h1>
            <div>
              {this.state.vinyls.map((vinyl) => {
                
                  <img src="{vinyl.img}"/>;{vinyl.type} {vinyl.title} {vinyl.release_title} {vinyl.credit} {vinyl.artist} {vinyl.any} {vinyl.label} {vinyl.genre} {vinyl.style} {vinyl.country} {vinyl.year} {vinyl.format} {vinyl.catno} {vinyl.barcode} {vinyl.track} {vinyl.submitter} {vinyl.contributor}
              
              }
              )
              }
              </div>
              
              </div>
          )
            }
            }
              
// class Login extends React.Component {
//   HasAccessToRouter = () => {
//     const history = useHistory(); 
  
//   customAuthHandler = () => {
//       history.push('/login');
//     };
//   }
//   render = () => {

//   }
        

      
    

class Header extends React.Component {
    render = () => {
        return(
         <div className="header-0">
            <div className="header-1">
            </div> 
            </div>
        )
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
        <Vinyl></Vinyl>  
        <Picks></Picks>      
        </div>
      )
    }
}
 
        

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
