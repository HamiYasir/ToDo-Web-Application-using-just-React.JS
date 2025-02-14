// This will contain some tabs
export function Tabs(props){
    const todos = props;

    const tabs = ['All', 'Open', 'Completed'];

    return(
        <nav className="tab-container">
            {tabs.map((tab, tab_index)=>{
                const num_of_tabs = tab === 'All' ? 
                    todos.

                return(
                    <button key={tab_index} className="tab-button">
                        <h4>{tab} <span>(0)</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}