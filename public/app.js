class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          vinyls: []
        };
      }

    componentDidMount = () => {
        fetch("https://api.discogs.com/artists/1")
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
        axios.delete('/vinyls/' + event.target.value).then(
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
            '/vinyls/' + id,
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
        const { error, isLoaded, vinyls } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {vinyls.map(vinyls => (
                <li key={vinyls.album}>
                  {vinyls.album} {vinyls.artist}
                </li>
              ))}
            </ul>
          );
        }
      }
    }
    return <div>
        <div className="header">
        </div> 
        </div>
        
        

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
