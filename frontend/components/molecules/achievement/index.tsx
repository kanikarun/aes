import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface AchievementProps {
  data: {
    id: string;
    label: string;
    values: AchievementListProps['data'];
  }[]
}

export const Achievement: React.FC<AchievementProps> = ({ data }) => {
  if (!data.length) return null;

  return (
    <Tabs defaultValue={data[0]?.id}>
      <TabsList className="*:data-active:bg-teal! mx-auto my-8 *:data-active:text-white! lg:my-6">
        {data.map(x => (
          <TabsTrigger key={`tab-trigger-${x.id}`} value={x.id}>
            {x.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map(x => (
        <TabsContent key={x.id} value={x.id}>
          <AchievementList data={x.values} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

interface AchievementListProps {
  data: {
    title: string;
    description?: string;
    image: string;
  }[]
}

const AchievementList: React.FC<AchievementListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((x, i) => (
        <div key={i} className="flex flex-col items-center rounded-2xl bg-white p-6 shadow outline outline-black/5">
          <div className="relative aspect-2/1 w-full">
            <Image fill className="object-contain" src={x.image} alt={x.title} />
          </div>
          <p className="prose prose-sm mt-2 text-center">{x.title}</p>
          {x.description && <p className="prose prose-sm mt-2 text-center">{x.description}</p>}
        </div>
      ))}
    </div>
  );
};
