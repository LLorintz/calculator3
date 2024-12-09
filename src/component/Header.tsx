
type headerProps = {
    setTheme : (t:string)=>void
}

const Header = ({setTheme}:headerProps) => {
  return (
    <div className="header">
        <h1>calc</h1>
        <div className="right">
            <h6>Theme</h6>
            <div className="input">
                <div className="label-choice">
                    <label htmlFor="theme1">1</label>
                    <label htmlFor="theme2">2</label>
                    <label htmlFor="theme3">3</label>
                </div>
                <div className="input-choice">
                    <input type="radio" id="theme1" name="theme" value="1" defaultChecked onClick={()=>setTheme('1')}/>
                    <input type="radio" id="theme2" name="theme" value="2" onClick={()=>setTheme('2')}/>
                    <input type="radio" id="theme3" name="theme" value="3" onClick={()=>setTheme('3')}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header