export const Textarea = ({
  placeholder = "placeholder ...",
  label = "",
  textareaStyle,
  ...props
}) => {
  return (
    <div className="flex flex-col">
    <label
      className=" text-sm mb-1 text-gray-600 dark:text-gray-200"
      htmlFor={label}
    >
      {label}
    </label>
    <textarea
      className={textareaStyle}
      name={label}
      id={label}
      placeholder={placeholder}
      cols="20"
      rows="4"
      {...props}
    ></textarea>
  </div>
  )
}
