/**
 * @name Timeline.tsx
 * @type Component
 */


import "../style/timeline.css";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "../hooks/useOnScreen";
import { useLanguage } from "../contexts/language-context";

// Propriétés de Timeline
type Props = {
  className?: string;
};

// Propriétés de TimelineText
type PropsAgain = {
  name: string;
  desc: string;
  right?: boolean;
};

// Propriétés de TimelineStep
type PropsAgainAgain = {
  name: string;
  desc: string;
  date: string;
  right?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

// Propriétés de TimelineDate
type PropsAgainReally = {
  date: string;
  right?: boolean;
};

/**
 * @TimelineText
 *
 * @description Affiche le titre et la description de l'étape.
 *
 * @param name: Nom de l'étape
 * @param desc: Description de l'étape
 * @param right: Si le texte est a droite de la timeline (sinon a gauche)
 *
 */
const TimelineText = ({ name, desc, right = false }: PropsAgain) => {
  return (
    <div
      className={cn(
        "p-fluide-anim flex w-20 flex-col items-center hover:scale-110 md:w-40 lg:h-32",
        right
          ? "timeline-end hover:translate-x-3"
          : "timeline-start hover:-translate-x-3",
      )}
    >
      {/* Nom de l'étape */}
      <span
        className={cn(
          "text-center text-base/4 opacity-90 lg:text-xl/5",
          fontJersey15.className,
        )}
      >
        {name}
      </span>
      {/* Description de l'étape */}
      <div
        className={cn(
          "mt-2 hidden text-center text-xs opacity-75 md:inline-block",
          fontInter.className,
        )}
      >
        {desc}
      </div>
    </div>
  );
};

/**
 * @TimelineMiddle
 *
 * @description Ligne du milieu de la timeline avec badge pour signaler l'étape.
 *
 */
const TimelineMiddle = () => {
  return (
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 dark:brightness-[20%] "
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

/**
 * @TimelineDate
 *
 * @description Ligne du milieu de la timeline avec badge pour signaler l'étape.
 *
 * @param date: Date de l'étape
 * @param right: Si le texte est à droite de la timeline (sinon a gauche)
 *
 */
const TimelineDate = ({ date, right = false }: PropsAgainReally) => {
  return (
    <div
      className={cn(
        "text-xs opacity-75",
        right ? "timeline-end" : "timeline-start",
      )}
    >
      {date}
    </div>
  );
};

/**
 * @TimelineStep
 *
 * @description Etape présente sur la timeline, avec titre, date et description.
 *
 * @param name: Nom de l'étape
 * @param desc: Description de l'étape
 * @param date: Date de l'étape
 * @param right: Si le texte est à droite de la timeline (sinon a gauche)
 * @param isFirst: Si c'est la première étape
 * @param isLast: Si c'set la denière étape
 *
 */
const TimelineStep = ({
  name,
  desc,
  date,
  right = false,
  isFirst = false,
  isLast = false,
}: PropsAgainAgain) => {
  return (
    <li>
      <hr className={cn(isFirst ? "first-hr" : "", "dark:invert")} />
      <TimelineMiddle />
      <TimelineText name={name} desc={desc} right={right} />
      <TimelineDate date={date} right={!right} />
      <hr className={cn(isLast ? "last-hr" : "", "dark:invert")} />
    </li>
  );
};

/**
 * @Timeline
 * Fonction principale
 *
 * @description Affiche une timeline de mes expérience professionel et
 * de mon parcours académique, avec pour chaque point, un titre, une description
 * et une date.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function Timeline({ className = "" }: Props) {
  // Référence pour l'apparition au scroll
  const [lineRef, lineVisible] = useOnScreen<HTMLUListElement>();

  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <ul
      ref={lineRef}
      className={cn(
        "delay-400 timeline transition-all duration-1000 ease-in-out lg:timeline-vertical",
        className,
        lineVisible
          ? ""
          : "-translate-y-20 opacity-0 lg:-translate-x-20 lg:-translate-y-0",
      )}
    >
      {/* Etape ensimag */}
     {/* Etape Bac */}
      <TimelineStep
        name={texts.about.timeline.bac.name}
        desc={texts.about.timeline.bac.desc}
        date={texts.about.timeline.bac.date}
        isFirst
      />

      {/* Etape IPEIM */}
      <TimelineStep
        name={texts.about.timeline.ipeim.name}
        desc={texts.about.timeline.ipeim.desc}
        date={texts.about.timeline.ipeim.date}
        right
      />

      {/* Etape ENSI */}
      <TimelineStep
        name={texts.about.timeline.ensi.name}
        desc={texts.about.timeline.ensi.desc}
        date={texts.about.timeline.ensi.date}
      />
      <TimelineStep
        name={texts.about.timeline.codeAndCraft.name}
        desc={texts.about.timeline.codeAndCraft.desc}
        date={texts.about.timeline.codeAndCraft.date}
        right
      />

      {/* Etape Enova Robotics */}
      <TimelineStep
        name={texts.about.timeline.enova.name}
        desc={texts.about.timeline.enova.desc}
        date={texts.about.timeline.enova.date}
        right
        isLast
      />
    </ul>
  );
}

export default Timeline;
