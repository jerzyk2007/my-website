import './Memorek.css';
import UserMenu from "./UserMenu";
import Board from "./Board";
import { DataProvider } from "./context/DataContext";

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