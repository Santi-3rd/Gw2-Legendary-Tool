import './styles/item-nav-bar.css'

export const ItemNavBar = ({setSelectedType}) => {
    return (
        <div>
            <nav className='navbar'>
                <span onClick={() =>setSelectedType ('Weapon')}>Weapons</span>
                <span onClick={() =>setSelectedType ('Armor')}>Armor</span>
                <span onClick={() =>setSelectedType ('Back')}>Back Items</span>
                <span onClick={() =>setSelectedType ('Trinket')}>Trinkets</span>
                <span onClick={() =>setSelectedType ('UpgradeComponent')}>Upgrade Components</span>
                <span onClick={() =>setSelectedType ('Relic')}>Relics</span>
            </nav>
        </div>
    )
}