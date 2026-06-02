import IconValid from '@/public/icons/valid.svg';
interface Props {
  content: string[];
}

export const InfoList: React.FC<Props> = ({ content }) => {
  return (
    <div className="grid grid-cols-1 gap-5 rounded-2xl border p-4 shadow-2xl sm:p-10 lg:grid-cols-2 lg:gap-10">
      {content.map((x, i) => (
        <div key={i} className="flex items-center space-x-3">
          <IconValid className="size-12 shrink-0 sm:size-16" />
          <p className="text-gray-500">{x}</p>
        </div>
      ))}
    </div>
  );
};
