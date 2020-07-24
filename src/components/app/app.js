import React from 'react';

//импортируем компоненты

import AppHeader from '../app-header/'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form';

//импортируем стили
import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const App = () => {

    const data = [
        {label: "Going to learn React", important: true, id : 'qweqwe'},
        {label: "That is so good", important: false, id : 'wqetrt'},
        {label: "I need a break...", important: false, id : 'sdakjsd'}
    ];
    

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div> 
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}


export default App;