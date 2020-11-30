import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import * as publicationsActions from '../../actions/publicationsActions';
import Spiner from '../utilities/Spiner'
import PageError from '../utilities/PageError'


class Publications extends Component {
	async componentDidMount() {
		if (!this.props.usersReducer.users.length) {
			await this.props.getUsers()
		}
		if(this.props.usersReducer.users.error){
			return
		}
		this.props.getPublicationUser(this.props.match.params.key)
	}

	putPublications = () =>{
		if (!this.props.usersReducer.users.length) {
			return 
		}
		if(this.props.usersReducer.users.error){
			return
		}
		if(this.props.publicationsReducer.loading){
			return <Spiner />
		}
		if(this.props.publicationsReducer.error){
			return <PageError message={this.props.publicationsReducer.error}/>
		}
		
		return(
			this.props.publicationsReducer.publications.map((publication) => 
			<div key={publication.id} className="pub_title" onClick={() => alert(publication.id)}>
				<h2>{publication.title}</h2>
				<h3>{publication.body}</h3>
			</div>
			)
		)
	}

	putUser = () =>{
		if(this.props.usersReducer.error){
			return <PageError message={ this.props.usersReducer.error}/>
		}
		if(!this.props.usersReducer.users.length || this.props.usersReducer.loading){
			return <Spiner/>
		}
		
		const user = this.props.usersReducer.users.filter(infoUser => infoUser.id == this.props.match.params.key);
		
		return (
			<div>
				<h1>Publicaciones de {user[0].name}</h1>
			</div>
		)
	}

	

	render() {
		console.log(this.props)
		/* console.log(JSON.stringify(this.props.usersReducer.users)+ "--------") */
		return (
			<div>
				{this.putUser()}
				{this.putPublications()}
			</div>
		);
	}
}

const mapStateToProps = ({usersReducer, publicationsReducer}) => {
	return {
		usersReducer,
		publicationsReducer
	}
};

const mapDispatchToProps = {
	...usersActions,
	...publicationsActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
