/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import TopBar from '../TopBar/TopBar';
import SideBar from '../SideBar/SideBar';
import NewsList from '../NewsList/NewsList';
import './Index.css';

class Index extends React.Component {
    render() {
        return (
            <div className="index">
                <TopBar/>
                <SideBar/>
                <NewsList/>
            </div>
        )
    }
}

export default Index;