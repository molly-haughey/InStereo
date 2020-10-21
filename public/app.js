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
        fetch("http://api.discogs.com/release/465740")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },

    createVinyl = (event) => {
        event.preventDefault();
        axios.post(
            '/vinyls',
            {
                name:this.state.newVinylName,
                img:this.state.newVinylImg,
            }
        ).then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )
    }

    changeNewPersonAge = (event) => {
        this.setState({
            newPersonAge:event.target.value
        });
    }

    changeNewPersonName = (event) => {
        this.setState({
            newPersonName:event.target.value
        });
    }

    deletePerson = (event) => {
        axios.delete('/people/' + event.target.value).then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )

    }

    updatePerson = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/people/' + id,
            {
                name:this.state.updatePersonName,
                age:this.state.updatePersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    people:response.data,
                    name:'',
                    age:null,
                })
            }
        )
    }

    changeUpdatePersonName = (event) => {
        this.setState(
            {
                updatePersonName:event.target.value
            }
        )
    }

    changeUpdatePersonAge = (event) => {
        this.setState(
            {
                updatePersonAge:event.target.value
            }
        )
    }

    render = () => {
        return <div>
            
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
