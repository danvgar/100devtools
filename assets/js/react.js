// Global Array of Tag objects
let tags = [
    {
        tagName: "stream",
        count: 0,
    },
    {
        tagName: "search",
        count: 0,
    },
    {
        tagName: "AI",
        count: 0,
    }
]

// Global Array of Link objects
let links = [
    {
        id: 1,
        title: "Google",
        url: "https://www.google.com/",
        description: "description",
    },
    {
        id: 2,
        title: "ChatGPT",
        url: "https://chat.openai.com/",
        description: "description",
    },
    {
        id: 3,
        title: "YouTube",
        url: "https://www.youtube.com/",
        description: "description",
    },

]


// Tag Component
function Tag({ title }) {

    const [count, setCount] = React.useState(0)

    function handleClick() {
        console.log("Successful Click")
        setCount(count + 1)
    }

    return <button
        onClick={handleClick}
    >
        {title.concat(" ", count)}
    </button>
}

// function Link({ linkIndex }) {
//     return <li>{links[linkIndex].title}</li>
// }

// App SubComponent 1: AppTags
function AppTags() {
    // Helper Function: mapTags
    function mapTags(obj) {
        return <Tag
            key={obj.tagName}
            title={obj.tagName.toLowerCase()}
        // I feel like there's a way to combine this with Tag(), such that Tag is creating all of the necessary information
        />
    }

    // Return: Map Tags into Aside
    return <>
        <aside
            id="app-tags"
        >
            {tags.map(mapTags)}
        </aside>
    </>
}

// App SubComponent 2: AppLinks
function AppLinks() {

    // Helper Function: Map Links
    function mapLinks(obj) {
        return <li
            key={obj.id}
        >
            {obj.title}
        </li>
    }

    // Return: Map Tags into Main
    return <>
        <main
            id="app-links"
        >
            <ul>
                {links.map(mapLinks)}
            </ul>
        </main>
    </>
}

// Main App Component
function App() {
    // <App /> returns <AppTags /> and <AppLinks />
    return <>
        <AppTags />
        <AppLinks />
    </>
}

// Render <App />
ReactDOM.render(<App />, document.getElementById("app"))
