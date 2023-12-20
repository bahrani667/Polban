import Image from "next/image";
import dosenData from "../../../data/dosen";
import Link from "next/link";

const Team1 = () => {
  return (
    <>
      {dosenData.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <Link href={`/team/${member.id}`}>
            <div className="team-block-two mt-40">
              <div className="img-meta position-relative">
                <Image
                  width={312}
                  height={281}
                  src={member.imageSrc}
                  alt={member.name}
                  className="lazy-img team-img w-100"
                />
                <div className="info text-center">
                  <h4 className="tx-dark fs-20 mb-5">{member.name}</h4>
                  <h6 className="tx-dark fs-20 mb-6">{member.jurusan}</h6>
                  <div className="tx-dark opacity-75">{member.role}</div>
                </div>
                {/* /.info */}
              </div>
              {/* /.img-meta */}
            </div>
            {/* /.team-block-two */}
          </Link>
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team1;
