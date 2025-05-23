interface SeparatorWithTextProps {
  text: string;
  id: string;
}

export default function Separator({ text, id }: SeparatorWithTextProps) {
  return (
    <div id={id} className="flex items-center gap-4 my-8 md:my-16">
      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
      <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {text}
      </span>
      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
    </div>
  );
}
