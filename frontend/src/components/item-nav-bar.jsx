import './styles/item-nav-bar.css'

export const ItemNavBar = ({setSelectedType, setCurrentPage}) => {

    function handleClickType(type) {
        setSelectedType(type);
        setCurrentPage(1);
    }


    return (
        <div>
            <nav className='navbar'>
                <span onClick={() => handleClickType ('Weapon')}>Weapons</span>
                <span onClick={() => handleClickType ('Armor')}>Armor</span>
                <span onClick={() => handleClickType ('Back')}>Back Items</span>
                <span onClick={() => handleClickType ('Trinket')}>Trinkets</span>
                <span onClick={() => handleClickType ('UpgradeComponent')}>Upgrade Components</span>
                <span onClick={() => handleClickType ('Relic')}>Relics</span>
            </nav>
        </div>
    )
}