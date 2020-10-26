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
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {vinyls.map(vinyls => (
                <li key={response}>
                  <img src="{vinyls.img}"/> {vinyls.type} {vinyls.title} {vinyls.release_title} {vinyls.credit} {vinyls.artist} {vinyls.any} {vinyls.label} {vinyls.genre} {vinyls.style} {vinyls.country} {vinyls.year} {vinyls.format} {vinyls.catno} {vinyls.barcode} {vinyls.track} {vinyls.submitter} {vinyls.contributor}
                </li>
              ))}
            </ul>
            
          );
    
        }
      }
    }

class Header extends React.Component {
    render = () => {
        return(
         <div>
            <div className="header">
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
      return(
        <div className="header">
        </div> 
      )
    }
}

    
        

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
