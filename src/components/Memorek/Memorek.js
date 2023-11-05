import { DataProvider } from "./context/DataProvider";
import UserMenu from "./UserMenu";
import Board from "./Board";
import './Memorek.css';

const Memorek = () => {

    return (
        <div className='memorek'>
            <DataProvider>
                <Board />
                <UserMenu />
            </DataProvider>
        </div>
    );
};

export default Memorek;