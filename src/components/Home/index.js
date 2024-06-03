// Write your code here

import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component{
    state={
        isLoading:true,
        blogData:[]
    }

    componentDidMount(){
        this.getBlogData()
    }

   getBlogData= async () => {
    const response= await fetch('https://apis.ccbp.in/ipl')
    const data= await response.json()
    const updatedData = data.map((each)=>({
        name:each.name,
        id:each.id,
        teamImageUrl:each.team_image_url
        
    }))
    this.setState({
        isLoading:false,blogData:updatedData
    })
   }
   
    render(){
        const {isLoading,blogData}=this.state
        return(
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl logo"/>
                <h1>IPL Dashboard</h1>
                <div>
                    {isLoading?(
                        <Loader type="TailSpin" color="#00BFFF" height={50} width={50}/>
                    ):(
                        <div></div>
                    )}

                
                
                </div>
            
            
            </div>
        )
    }
}

export default Home
