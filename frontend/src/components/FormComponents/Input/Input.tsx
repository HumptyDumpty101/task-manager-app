interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Change as needed if using a different type of icon
}

const Input: React.FC<InputProps> = ({ icon: Icon, children, ...props }) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {/* We renamed icon to Icon with icon:Icon so that we can use it directly below  */}
        {/* we cant normally use <icon></icon> since that is already a built in html element */}
        <Icon className="text-primary h-5 w-5" />
      </div>
      <input
        {...props}
        className="primary-blue w-full rounded-md border border-gray-500 py-2 pl-10 pr-3 text-gray-800 placeholder-gray-500 transition duration-200 focus:border-blue-primary focus:outline-blue-primary focus:ring-blue-primary"
      />
      {children}
    </div>
  );
};

export default Input;
