import {BrowserRouter , Route , Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import { Navbar , Feed  , VideoDetail,SearchFeed , ChannelDetail } from './components'

const App = () => (
  // routes
     <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
          <Navbar/>
          <Routes>
            {/* feed route */}
            <Route path='/' exact element={<Feed/>} />
            {/* video route */}
            <Route path='/video/:id' exact element={<VideoDetail/>} />
            {/* channel route */}
            <Route path='/channel/:id' exact element={<ChannelDetail/>} />
            {/* search term route */}
            <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
          </Routes>
        </Box>
    </BrowserRouter>
)

export default App