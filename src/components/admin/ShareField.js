const ShareField = ({ record, source }) => {
  return <a href={`${window.origin}/sharedProject/${record?.shareId}`}>Link</a>;
};

ShareField.defaultProps = { addLabel: true };
export default ShareField;
