import { SimpleTreeView, TreeItem2 } from "@mui/x-tree-view";
import { Link, Outlet } from "react-router";

import { BrandLogo } from "./BrandLogo";
import { ModeToggle } from "./ModeToggle";

const RootLayout: React.FC = () => {
  return (
    <>
      <header className="bg-background sticky top-0 z-10 flex h-14 items-center justify-between px-4 shadow-md">
        <BrandLogo />
        <ModeToggle />
      </header>
      <div className="container mx-auto flex gap-4 px-4 py-8">
        <div className="grow">
          <Outlet />
        </div>
        <div className="h-fit min-w-3xs rounded-md p-2 shadow-md">
          <SimpleTreeView>
            <TreeItem2
              itemId="abc"
              label={
                <Link to="/foo/-/manuals/abc" className="hover:underline">
                  abc
                </Link>
              }
            >
              <TreeItem2
                itemId="abc/foo"
                label={
                  <Link to={`/foo/-/manuals/foo`} className="hover:underline">
                    foo
                  </Link>
                }
              />
              <TreeItem2
                itemId="abc/bar"
                label={
                  <Link to={`/foo/-/manuals/bar`} className="hover:underline">
                    bar
                  </Link>
                }
              />
              <TreeItem2
                itemId="abc/baz"
                label={
                  <Link to={`/foo/-/manuals/baz`} className="hover:underline">
                    baz
                  </Link>
                }
              >
                <TreeItem2
                  itemId="abc/baz/foo"
                  label={
                    <Link to={`/foo/-/manuals/baz/foo`} className="hover:underline">
                      foo
                    </Link>
                  }
                />
                <TreeItem2
                  itemId="abc/baz/bar"
                  label={
                    <Link to={`/foo/-/manuals/baz/bar`} className="hover:underline">
                      bar
                    </Link>
                  }
                ></TreeItem2>
              </TreeItem2>
            </TreeItem2>
            <TreeItem2
              itemId="def"
              label={
                <Link to={`/foo/-/manuals/def`} className="hover:underline">
                  def
                </Link>
              }
            >
              <TreeItem2
                itemId="def/foo"
                label={
                  <Link to={`/foo/-/manuals/foo`} className="hover:underline">
                    foo
                  </Link>
                }
              />
              <TreeItem2
                itemId="def/bar"
                label={
                  <Link to={`/foo/-/manuals/bar`} className="hover:underline">
                    bar
                  </Link>
                }
              />
              <TreeItem2
                itemId="def/baz"
                label={
                  <Link to={`/foo/-/manuals/baz`} className="hover:underline">
                    baz
                  </Link>
                }
              >
                <TreeItem2
                  itemId="def/baz/foo"
                  label={
                    <Link to={`/foo/-/manuals/baz/foo`} className="hover:underline">
                      foo
                    </Link>
                  }
                />
                <TreeItem2
                  itemId="def/baz/bar"
                  label={
                    <Link to={`/foo/-/manuals/baz/bar`} className="hover:underline">
                      bar
                    </Link>
                  }
                ></TreeItem2>
              </TreeItem2>
            </TreeItem2>
          </SimpleTreeView>
        </div>
      </div>
    </>
  );
};

export { RootLayout };
