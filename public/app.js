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
        console.log('at submit')    
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
      isVisible: false,
      vinyls: [],
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentDidMount() {
    fetch('/vinyls')
      .then(response => response.json())
      .then(vinyls => this.setState({vinyls}))
  }

  handleToggle(VinylDescriptionId) {
    //console.log('e of handle toggle', e);
    //console.log(this);
    //this.setState({ isVisible: !this.state.isVisible,
    //id: e.target.value});
    //id: 
    const description = document.getElementById(VinylDescriptionId)
    description.classList.remove('is-hidden')
  };
  
    render = () => { 
      //const isVisible = this.state.isVisible;
        return (
            <div>
              <h1>Staff Picks</h1> 
            <div>
              {this.state.vinyls.map((vinyl) => {
                return (
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                      
                      <button onClick={e => this.handleToggle(vinyl.anv)}>
                        <img value={this.state.id} className="is-clickable" src={vinyl.img}/>
                      </button>
                      
                      <br/></figure>
                      <div className="card-content">
                        <div className="content">
                          <b> {vinyl.title}</b> <br/> 
                          <div id={vinyl.anv} className="is-hidden">
                
                            <b>Vinyl Type:</b> {vinyl.type} <br/> <b>Album Title:</b> {vinyl.release_title} <br/><b>Credits:</b> {vinyl.credit} <br/> <b>Artist:</b> {vinyl.artist} <br/> <b>Alternate Artist Names: </b> {vinyl.anv} <br/> <b>Label:</b> {vinyl.label} <br/> <b>Genre:</b> {vinyl.genre} <br/> <b>Style:</b> {vinyl.style} <br/> <b>Country:</b> {vinyl.country} <br/> <b>Year:</b> {vinyl.year} <br/> <b>Format:</b> {vinyl.format} <br/> <b>Catno:</b> {vinyl.catno} <br/> <b>Barcode:</b> {vinyl.barcode} <br/> <b>Tracks:</b> {vinyl.track} <br/> <b>Price:</b> ${vinyl.price}
                          </div>
                        </div>
                     </div>
                    </div>
                  </div>  
                )
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