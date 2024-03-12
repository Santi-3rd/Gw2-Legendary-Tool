import './styles/title-nav-bar.css'

export const TitleNavBar = () => {
    return (
        <div>
            <nav className="title-nav">
                <span>Legendary-Crafting-Tool</span>
                <select>
                    <option value="Bank">Bank</option>
                    <option value="Recipes">Recipes</option>
                    <option value="account-settings">Account Settings</option>
                </select>
            </nav>
        </div>
    )
}