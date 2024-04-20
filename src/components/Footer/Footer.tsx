export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <div
      id="footer"
      className="absolute left-0 flex w-full justify-center bg-gray-800 py-1"
    >
      <span className="text-slate-300">
        Created by{" "}
        <a
          className="hover:underline"
          href="https://github.com/karthikeyanselvam18"
        >
          @KarthikeyanSelvam18
        </a>
      </span>
    </div>
  );
}
