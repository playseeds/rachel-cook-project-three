
const Form = () => {
    return (
        <>
            <label htmlFor="date">Please select the date you'd like to view:</label>
            <input className="form" type="date" id="date" name="date"
                value=""
                min="2013-02-02"
                max={new Date}>
            </input>
        </>
    )
}

export default Form;