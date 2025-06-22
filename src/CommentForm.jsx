import { useFormik } from "formik";

let style = {
  border: "2px solid white",
  padding: "2.5rem",
  borderRadius: "1rem",
};

function CommentForm({ addComment }) {
  // Validation function
  function validate(values) {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.comments) {
      errors.comments = "Required";
    }
    if (!values.ratings || values.ratings < 0 || values.ratings > 5) {
      errors.ratings = "Rating must be between 0 and 5";
    }
    return errors;
  }

  // Formik setup
  const formik = useFormik({
    initialValues: {
      username: "@Pg",
      comments: "Good",
      ratings: "5",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addComment(values);
      resetForm(); // Reset form after submission
    },
  });

  return (
    <>
      <h4>Comment Form</h4>
      <form onSubmit={formik.handleSubmit} style={style}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.username && <small>{formik.errors.username}</small>}
        <br />
        <br />

        <label htmlFor="comments">Comments: </label>
        <textarea
          placeholder="Enter Comment"
          id="comments"
          name="comments"
          value={formik.values.comments}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.comments && <small>{formik.errors.comments}</small>}
        <br />
        <br />

        <label htmlFor="ratings">Ratings: </label>
        <input
          type="number"
          id="ratings"
          name="ratings"
          min={0}
          max={5}
          value={formik.values.ratings}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.ratings && <small>{formik.errors.ratings}</small>}
        <br />
        <br />

        <button type="submit">Send Data</button>
      </form>
    </>
  );
}

export default CommentForm;
