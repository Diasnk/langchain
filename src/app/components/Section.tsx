// components/ExpandableCard.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import {Button} from '@/components/ui/button'

const ExpandableCard = ({ title, content, footer }:{title: any, content: any, footer: any}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="my-4 shadow-md">
      <CardHeader className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Button variant="ghost" size="icon">
          {isOpen ? '-' : '+'}
        </Button>
      </CardHeader>
      {isOpen && (
        <CardContent>
          {content}
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default ExpandableCard;
