import Basic from '/src/components/exemples/Basic';
import Events from '/src/components/exemples/Events';
import Images from '/src/components/exemples/Images';
import Hooks from '/src/components/exemples/Hooks';
import List from '/src/components/exemples/List';
import RenderCond from '/src/components/exemples/RenderCond';
import Fragment from '/src/components/exemples/Fragment';
import Container from '/src/components/exemples/Container';

const Exemples = () => {
    return (
        <>
            <div>Hello World!</div>
            <Images />
            <Basic />
            <Events />
            <Hooks />
            <List />
            <RenderCond x={5} y={10}/>
            <Fragment />
            <Container>
            <h3> Este é o filho container</h3>
            </Container>
        </>
    )
}

export default Exemples