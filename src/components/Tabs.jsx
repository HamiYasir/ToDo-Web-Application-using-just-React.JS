// This will contain some tabs
export function Tabs(props){
    const { todos } = props;

    const tabs = ['All', 'Open', 'Completed'];

    return(
        <nav className="tab-container">
            {tabs.map((tab, tab_index)=>{
                const num_of_tabs = tab === 'All' ? 
                    todos.length :
                    tab === 'Open' ?
                        todos.filter(val => !val.complete).length : 
                        todos.filter(val => val.complete).length

                return(
                    <button key={tab_index} className="tab-button">
                        <h4>{tab} <span>({num_of_tabs})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}