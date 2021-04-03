import React from 'react'
import Tvactive from './tvactive/tvactive';
import Tvnoactive from './tvnoactive/tvnoactive';
import './tv.scss';
function Tv() {
    return (
        <div>
            <Tvnoactive/>
            <Tvactive/>
        </div>
    )
}

export default Tv
