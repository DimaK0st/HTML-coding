import React, {useEffect, useState} from 'react';
import './lastVisitedPhones.scss'
import LastPhone from "./lastPhone/LastPhone";

function LastVisitedPhones(props) {

    return (
        <div className={'last-numbers'}>

            <span className={'last-numbers-title'}>Останні відвідані номери</span>

            <div className={'last-numbers-items'}>
                <LastPhone avg={1.3} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={2.3} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={3.3} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={4.3} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={5} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={1.6} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={2.6} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={3.6} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={4.6} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
                <LastPhone avg={5} phone={+380971281678} description={'asdfasd fas dfasd fas dfa sdfa sdf as df as df asdfasd fas dfasd fas dfa sdfa sdf as df as df '}/>
             </div>

        </div>
    )
}

export default LastVisitedPhones;
