function HomepageSection({sendCategory, section, message}) {


  return (
    <div className={`category-container ${section}`}>
      <div className="btn-2">
          <a><span><div id={section} onClick={sendCategory} className="category-name">{section}</div></span></a>
      </div>
      <div className="category-description">
        {message}
      </div>
      <div className="btn-1">
        <a><span id={section} onClick={sendCategory}>Check Starters</span></a>
      </div>
    </div>
  )
}

export default HomepageSection