type CalendarItemProps = {
  time: string;
  title: string;
  description?: string;
};

export const CalendarItem = ({
  time,
  description,
  title,
}: CalendarItemProps) => {
  return (
    <div className="calendarItem">
      <span>{time}</span>
      <div>
        <div>{title}</div>
        {description && <div className="distance">{description}</div>}
      </div>
    </div>
  );
};
