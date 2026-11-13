import type { SVGProps } from "react";
export function Icon({name,...props}:{name:string}&SVGProps<SVGSVGElement>){
 const paths:Record<string,React.ReactNode>={
  heart:<><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></>,
  book:<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H11V5H6.5A2.5 2.5 0 0 0 4 7.5v12Z"/><path d="M20 19.5a2.5 2.5 0 0 0-2.5-2.5H13V5h4.5A2.5 2.5 0 0 1 20 7.5v12Z"/></>,
  gift:<><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7.5 8C5 8 5 4.5 7.5 4.5 10 4.5 12 8 12 8s2-3.5 4.5-3.5S19 8 16.5 8"/></>,
  star:<><path d="m12 2 2.7 6.5 7 .6-5.3 4.6 1.6 6.8-6-3.6-6 3.6 1.6-6.8-5.3-4.6 7-.6L12 2Z"/></>,
  spark:<><path d="M12 2c.5 5.5 2.5 7.5 8 8-5.5.5-7.5 2.5-8 8-.5-5.5-2.5-7.5-8-8 5.5-.5 7.5-2.5 8-8Z"/></>,
  family:<><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 21v-3.5A4.5 4.5 0 0 1 7 13h2a4.5 4.5 0 0 1 4.5 4.5V21M14 14h3.5a4 4 0 0 1 4 4v3"/></>,
  arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>,
  home:<><path d="m3 11 9-8 9 8"/><path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6"/></>,
  menu:<><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close:<><path d="M6 6l12 12M18 6 6 18"/></>
 };
 return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>{paths[name]||paths.spark}</svg>
}
