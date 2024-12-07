import About from '../components/About';
import Title from '../components/Title';

function MainPage() {
    return (
        <>
            <About info={{ title: "Some Title", body: "Some body" }} />
            <Title text="Hello world" />
        </>
    )
}
export default MainPage;