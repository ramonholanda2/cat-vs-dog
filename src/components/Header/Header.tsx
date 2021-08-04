
import { HeaderPage, Option, Divisor } from './styles';

const Header = () => {
    return (
        <HeaderPage>
            <Option isCat={true} isDog={false}>
                Gato
            </Option>
            <Divisor />
            <Option isCat={false} isDog={true} >
                Cachorro
            </Option>
        </HeaderPage>
    )
}

export default Header
