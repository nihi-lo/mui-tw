import { SimpleTreeView, TreeItem2 } from "@mui/x-tree-view";
import { useMemo } from "react";
import { RiFileListLine } from "react-icons/ri";
import { Link, Outlet, type To } from "react-router";

import { BrandLogo } from "./BrandLogo";
import { ModeToggle } from "./ModeToggle";

const TreeItemEndIcon = () => {
  return <RiFileListLine className="opacity-50" />;
};

type TreeItem = {
  id: string;
  to: To;
  label: string;
  subItems?: TreeItem[];
};

export const RootLayout: React.FC = () => {
  const renderItems = useMemo<TreeItem[]>(() => {
    return [
      {
        id: "abc",
        to: "/foo/manuals/abc",
        label: "abc",
        subItems: [
          { id: "abc/foo", to: "/foo/manuals/abc/foo", label: "foo" },
          { id: "abc/bar", to: "/foo/manuals/abc/bar", label: "bar" },
        ],
      },
      {
        id: "def",
        to: "/foo/manuals/def",
        label: "def",
        subItems: [
          {
            id: "def/foo",
            to: "/foo/manuals/def/foo",
            label: "foo",
            subItems: [
              { id: "def/foo/foo", to: "/foo/manuals/def/foo/foo", label: "foo" },
              { id: "def/foo/bar", to: "/foo/manuals/def/foo/bar", label: "bar" },
            ],
          },
          { id: "def/bar", to: "/foo/manuals/def/bar", label: "bar" },
        ],
      },
    ];
  }, []);

  const renderTreeItems = (items: TreeItem[]): React.ReactNode => {
    return items.map((item) => (
      <TreeItem2
        key={item.id}
        itemId={item.id}
        label={
          <Link to={item.to} onClick={(e) => e.stopPropagation()} className="hover:underline">
            {item.label}
          </Link>
        }
      >
        {item.subItems && renderTreeItems(item.subItems)}
      </TreeItem2>
    ));
  };

  return (
    <>
      <header className="bg-background sticky top-0 z-10 flex h-14 items-center justify-between px-4 shadow-md">
        <BrandLogo />
        <ModeToggle />
      </header>
      <div className="container mx-auto flex gap-8 px-4 py-8">
        <div className="grow">
          <Outlet />
        </div>
        <div className="h-fit min-w-xs rounded-lg p-4 shadow-md">
          <SimpleTreeView slots={{ endIcon: TreeItemEndIcon }}>
            {renderTreeItems(renderItems)}
          </SimpleTreeView>
        </div>
      </div>
    </>
  );
};
